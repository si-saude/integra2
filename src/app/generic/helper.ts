
export class Helper {
    constructor() {
    }

    toDate(date: any) {
      if (date) {
        if (date.toString().substring(10, 11) === 'T') {
          const year = date.toString().substring(0, 4);
          const month = date.toString().substring(5, 7);
          const day = date.toString().substring(8, 10);
          const hour = date.toString().substring(11, 13);
          const minute = date.toString().substring(14, 16);
          const second = date.toString().substring(17, 19);
          date = new Date();
          date.setFullYear(year);
          date.setMonth(Number(month) - 1);
          date.setDate(day);
          date.setHours(hour);
          date.setMinutes(minute);
          date.setSeconds(second);
        }else {
            const array = date.split('-');
          if (array.length === 3) {
            date = new Date();
            date.setFullYear(array[0]);
            date.setMonth(Number(array[1]) - 1);
            date.setDate(array[2]);
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
          }
        }
      }
      return date;
    }

    ignoreLastStringArrayItem(str: string, separator: string) {
      const array = str.split(separator);
      let ret = '';

      for (let i = 0; i < (array.length - 1); i++) {
        ret += (i !== 0 ? '-' : '') + array[i];
      }

      return ret;
    }

    getProperty(obj: any, properties: string) {
      let objReturn = obj;
      const propertyArray = properties.split('.');
      for (let property of propertyArray) {
        objReturn = objReturn[property];
      }
      return objReturn;
    }

    getObjectAndProperty(obj: any, properties: string) {
      let objReturn = obj;
      const propertyArray = properties.split('.');
      for (let i = 0; i < (propertyArray.length - 1); i++) {
        objReturn = objReturn[propertyArray[i]];
      }
      return [objReturn, propertyArray[propertyArray.length - 1]];
    }

    dirtyForm(component) {
      if (component.form && !component.form.dirty) {
        const controls = component.form.controls;
        const properties = Object.keys(controls);

        if (properties.length > 0) {
          controls[properties[0]].markAsDirty();
        }
      }
    }

    getOnlyNumber(str: string) {
      return str.replace( /\D/g, '' );
    }

    addLeftZero(s: string) {
      if (s && s.length < 2) {
        s = '0' + s;
      }
      return s;
    }

    createDateFromString(stringDate: string): Date {
      const fullDateArray = stringDate.split(' ');
      const dateArray = fullDateArray[0].split('/');
      let timeArray = new Array<any>();
      if (fullDateArray[1]) {
          timeArray = fullDateArray[1].split(':');
      } else {
          timeArray = [0, 0];
      }
      // CRlAR UMA DATA A PARTlR DAS POSlÇÕES DO VETOR E CONVERTER PARA MlLlSEGUNDOS
      const date = new Date(Number(dateArray[2]), Number(dateArray[1]) - 1, Number(dateArray[0]),
          Number(timeArray[0]) - this.getTimeZoneNumber(), Number(timeArray[1]), 0, 0);
      return date;
    }

    validateDate(stringDate: string): boolean {
      const fullDateArray = stringDate.split(' ');
      const dateArray = fullDateArray[0].split('/');
      const date = this.createDateFromString(stringDate);
      if (date.getFullYear() === Number(dateArray[2]) && date.getMonth() ===  Number(dateArray[1]) - 1
          && date.getDate() === Number(dateArray[0])) {
            return true;
      }
      return false;
    }

    getTimeZoneNumber() {
      return new Date(2000,1,1).getHours();
    }
}
