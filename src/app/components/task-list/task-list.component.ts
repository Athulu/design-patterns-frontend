import { Component, OnInit } from '@angular/core';
import { DesignPatternsClientService } from "../../services/design-patterns-client.service";
import { TaskObject } from "../../interfaces/task-object";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: TaskObject[] = [];

  constructor(private designPatternsService: DesignPatternsClientService) {
  }

  ngOnInit(): void {
    this.designPatternsService.getDesignPatternsList().subscribe((tasks) => {
        this.tasks = tasks;
    });
  }
}
