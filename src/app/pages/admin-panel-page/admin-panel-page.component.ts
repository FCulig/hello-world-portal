import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ChangeDetectorRef
} from "@angular/core";
import { User } from "src/app/entities/user";
import { UserService } from "src/app/services/user.service";
import { MatTableDataSource } from "@angular/material";
import { MatPaginator } from "@angular/material/paginator";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-admin-panel-page",
  templateUrl: "./admin-panel-page.component.html",
  styleUrls: ["./admin-panel-page.component.scss"]
})
export class AdminPanelPageComponent implements OnInit {
  faTrash = faTrash;

  users: User[];
  displayedColumns: string[] = [
    "name",
    "email",
    "role",
    "roleChange",
    "deleteUser"
  ];

  @Input() dataSource = new MatTableDataSource(this.users);
  numberOfUsers: number;

  constructor(
    private userService: UserService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.userService.getAllUsers().subscribe(val => {
      this.dataSource = new MatTableDataSource(val);
      this.users = val;
      this.numberOfUsers = this.users.length;
    });

    //TODO: popravi undefined
    console.log(this.users);

    //this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  promoteUser(userId: string) {
    this.userService.promoteUser(userId).subscribe(val => {
      if(val.promoted){
        this.updateTable();
      }
    });
  }

  demoteUser(userId: string) {
    this.userService.demoteUser(userId).subscribe(val => {
      if(val.demoted){
        this.updateTable();
      }
    });
    this.updateTable();
  }

  private updateTable() {
    this.userService.getAllUsers().subscribe(val => {
      this.dataSource = new MatTableDataSource(val);
      this.changeDetectorRefs.detectChanges();
    });
  }
}
