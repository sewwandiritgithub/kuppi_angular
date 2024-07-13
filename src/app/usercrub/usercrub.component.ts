import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercrub',
  templateUrl: './usercrub.component.html',
  styleUrls: ['./usercrub.component.css']
})
export class UsercrubComponent implements OnInit {
  userArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  
  Fname: string = "";
  Password: string = "";
  Email: string = "";
  Phone_number: string = "";
  Address: string = "";
  Role: string = "";
  currentUserID: string = "";
  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.http.get("http://localhost:7007/api/dbuser/user/")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.userArray = resultData.data;
      });
  }

  

  register()
  {
    let bodyData = {
      "Fname": this.Fname,
      "Password": this.Password,
      "Email": this.Email,
      "Phone_number": this.Phone_number,
      "Address": this.Address,
      "Role": this.Role,
    };
    console.log("bodyData",bodyData)
    this.http.post("http://localhost:5003/api/user/add",bodyData).subscribe((resultData: any) =>
    {
      console.log(resultData);
      alert("User add successfully")
      this.getAllUser();
    });
  }

  setUpdate(data:any)
  {
    this.Fname = data.Fname;
    this.Password = data.Password;
    this.Email = data.Email;
    this.Phone_number = data.Phone_number;
    this.Address= data.Address;
    this.Role = data.Role;

  
  
  this.currentUserID = data.id;
  }
    updateRecords()
  {
  let bodyData =
  {
    "Fname" : this.Fname,
    "Password" : this.Password,
    "Email": this.Email,
    "Phone_number": this.Phone_number,
    "Address": this.Address,
    "Role": this.Role
  };
  
  this.http.put("http://localhost:3307/api/dbuser/user/update"+ "/"+ this.currentUserID,bodyData).subscribe((resultData:any)=>
  {
console.log(resultData);
alert("user updated")
this.getAllUser();
  });
  }

  save()
  {
    if(this.currentUserID =='')
      {
        this.register();
      }else
      {
        this.updateRecords();
      }
  }


  

setDelete(data:any)
{
  this.http.delete("http://localhost:3307/api/dbuser/user/delete"+ "/"+ data.id).subscribe((resultData:any)=>
  {
    console.log(resultData);
    alert("user deleted")
    this.getAllUser();
  });
  
  }
}




