import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { CompilerService } from './compiler.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'datain',
  templateUrl: './datain.component.html',
  styleUrls: ['./datain.component.css']
})
export class DatainComponent {

  userData: any = {};
  userData$;

  constructor(
    private profile: ProfileService,
    private compiler: CompilerService
  ) { }

  ngOnInit() {
    // this.profile.getUser(1).subscribe((data) => {
    //   this.userData = this.compiler.constructUserData(data);
    // });

    this.userData$ = this.profile.getUser(1)
      .pipe(map(data => this.compiler.constructUserData(data)))
    console.log(this.userData$);
  }
}
