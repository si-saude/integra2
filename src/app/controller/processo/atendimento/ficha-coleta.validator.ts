import { Injectable } from '@angular/core';

import { Helper } from './../../../generic/helper';
import { IValidator } from './../../../generic/ivalidator';
import { DialogService } from './../../../util/dialog/dialog.service';

import { ProfissionalFilter } from './../../../filter/profissional.filter';
import { Checkin } from './../../../model/checkin.model';
import { Profissional } from './../../../model/profissional.model';
import { RespostaFichaColeta } from './../../../model/resposta-ficha-coleta.model';
import { Usuario } from './../../../model/usuario.model';

import { AtendimentoService } from './../../../service/atendimento.service';
import { UsuarioService } from './../../../service/usuario.service';

@Injectable()
export class FichaColetaValidator implements IValidator<Checkin> {

    private helper: Helper;
    public profissional: Profissional;

    constructor(private dialogService: DialogService, private usuarioService: UsuarioService, 
        private servico: AtendimentoService) {
        this.helper = new Helper();
    }

    getProfissional() {
        const usuario: Usuario = this.usuarioService.toObject(JSON.parse(localStorage.getItem('user')));
        const filter: ProfissionalFilter = this.servico.getFilaAtendimentoService()
            .getProfissionalService().initializeFilter();
        filter.$pageSize = 1;
        filter.$empregado.$chave = usuario.$chave;
        this.servico.getFilaAtendimentoService().getProfissionalService().listEquipes(
            filter, (res) => {
            const list = res.json().list;
            if (list && list[0]) {
                this.profissional = this.servico.getFilaAtendimentoService().getProfissionalService()
                .toObject(list[0]);
            } else {
                this.profissional = undefined;
            }
        }, undefined);
    }

    checkEquipe(resposta: RespostaFichaColeta, profissional: Profissional) {
        return resposta.$pergunta.$equipes.find(e => profissional.$equipes.find(ee => ee.$id === e.$id) !== undefined) !== undefined;
    }

    validate(checkin: Checkin): boolean {
        if (!this.profissional) {
            this.getProfissional();
        }
        
        const respostaFuma: RespostaFichaColeta = checkin.$respostas.find(r => r.$pergunta.$path === 'fuma');
        for (let resposta of checkin.$respostas) {
            const check: boolean = this.checkEquipe(resposta, this.profissional);
            if (check === true && resposta.$pergunta.$obrigatorio === true &&
                (resposta.$conteudo === undefined || resposta.$conteudo.trim() === '')) {
                if (resposta.$pergunta.$grupo.$nome === 'TESTE DE FAGERSTRÖM' && respostaFuma && respostaFuma.$conteudo && 
                    respostaFuma.$conteudo !== 'FUMANTE' && respostaFuma.$conteudo !== 'ABSTÊMIO') {
                        continue;
                }
                this.servico.showMessage('Não é possível prosseguir pois há itens obrigatórios não preenchidos na ficha de coleta: ' +
                    resposta.$pergunta.$descricao);
                return false;
            }
        }
        return true;
    }
}
