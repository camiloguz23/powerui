import { Component, OnInit } from '@angular/core';
import * as microsoftTeams from '@microsoft/teams-js'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    microsoftTeams.initialize();
    microsoftTeams.getContext((context) => {
      console.log(context)
      this.Teamname = context.teamName || ""
      this.teamID = context.teamId || ""
    })

  }

  teamID = ""
  Teamname = ""


}
