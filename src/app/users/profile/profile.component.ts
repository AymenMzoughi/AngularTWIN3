import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Core/model/user';
import { UserService } from 'src/app/Core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public id: String;
  public user: User;
  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    let list: User[]
    list = this.userService.list.filter(user => user.id.toString()==this.id) as any 
    this.user= list[0]
  }

}
