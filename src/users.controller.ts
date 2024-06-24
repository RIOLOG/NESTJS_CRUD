import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { userDTO } from "./DTO/user.dto";


let USERS = [];

@Controller('/users')
export class UsersController{

    @Post('/add')
    addUser(@Body() user: userDTO){
        console.log(user);
        USERS.push(user);
        return"User Added"
    }


    @Get('/alluser')
    getUsers(){
        console.log(USERS);
        return USERS;
    }

    @Get(":id")
    getUser(@Param("id") id:number){
        console.log(id);
        const user = USERS.find((user) => user.id === +id);

        if (!user) {
          return { message: "User not found" };
        }
    
        return user;
      }

      @Put(":id")
  updateUser(@Param("id") id: number, @Body() user: userDTO) {
    const userIdx = USERS.findIndex((user) => user.id === +id);

    if (!userIdx) {
      return { message: "User not found" };
    }

    USERS[userIdx] = user;

    return { message: "User updated" };
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number) {
    USERS = USERS.filter((user) => user.id !== +id);

    return { message: "User deleted" };
  }
    
}