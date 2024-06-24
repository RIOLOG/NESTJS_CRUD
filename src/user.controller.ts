// import { Body, Controller, Get, Headers, Param, Post, Query, Redirect, } from '@nestjs/common';


// interface videosDTO {
//     name:string;
//     tag:string;
// }    


// @Controller('/user')
// export class UserController {

// //     @Get("/profile")
// //     @Redirect('/user/account', 304)
// //   getProfle() {
// //     return "Hello Ankit"
// //   }

// //   @Get('/account')
// //   redirectedRoute(){
// //     return "working Account"
// //   }



// ///////////////// Query Parameter and Request Handler /////////////////////////////

// //   @Get('/videos/:id')
// //   getVideos(@Param() params: Record<string, any>) {

// //     // console.log(params);    ->  { id: '1' }
// //     // console.log(params.id)  -> 1

// //     return 'Success;';
// //     }

// //   @Get('/videos/:id/:name')
// // getVideos(@Param() params: Record<string, any>) {

// //     //console.log(params.name);   => ankit
// //     // console.log(params)   => { id: '1', name: 'ankit' }

// //     return 'Success;';
// //   }


// //     @Get('/videos')
// //     getVideos(@Query() query: Record<string,any> ) {

// //         // http://localhost:3000/user/videos?name=ankit&age=21
// //         // console.log(query)  => { name: 'ankit', age: '21' }

// //         return 'Success;';
// //   }


// /////////// REQUEST HEADER GETTING /////////////////////////////////////////////

//     // @Get('/videos')
//     // getVideos(@Headers() header:Record<string,any>){

//     //     // console.log(header) -> {
//     //     //     'user-agent': 'PostmanRuntime/7.37.3',
//     //     //     accept: '*/*',
//     //     //     'cache-control': 'no-cache',
//     //     //     'postman-token': 'd33b9b18-579d-4dc4-9d97-c55f2689aa33',        
//     //     //     host: 'localhost:3000',
//     //     //     'accept-encoding': 'gzip, deflate, br',
            
//     //     return "Ankit Singh";
//     // }









//     ///////////////////////////////////////  EXTRACTING BODY SENT FROM CLINET ////////////////////////////////////
     

//     // @Post('/videos')
//     // addVideos(@Body() reqData: videosDTO){

//     //     // console.log(reqData)   => { name: 'Ankit', age: '21', id: 2 }

//     //     return {screen:true};
//     // }



//     //////////////////////////// CRUD OPERATION ON USER ////////////////////////////////



// }
