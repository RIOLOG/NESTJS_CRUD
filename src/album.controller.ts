import { Controller, Get, Header, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { ok } from 'assert';
import { Request, Response } from 'express';

@Controller('/album')
export class albumController {
  @Get('/profile')
  @HttpCode(HttpStatus.ACCEPTED)
  @Header('X-Name', 'Riolog')
  getProfle(@Res({ passthrough: true }) res: Response) {
    // res.json({        -> WHEN PASSTHROUGH IS NOT TRUE
    //     key:'value'
    // });

    return {
        code:"Ankit Singh"
    }
  }
}
