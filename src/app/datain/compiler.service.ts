import { Injectable } from '@angular/core';

@Injectable()
export class CompilerService {

  constructor() { }

  constructUserData(data) {
    return { 
      first_name: data.name.split(' ')[0], 
      last_name: data.name.split(' ')[1],
      email: data.email, 
      mobile_no: data.phone 
    };
  }

}