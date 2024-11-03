import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Res,
  Param,
  Get,
} from '@nestjs/common';
import { CrossmintService } from './crossmint.service';
import { CreateOffer } from './dtos/createOffer.dto';
import { CreateTemplateDto } from './dtos/createTemplate.dto';

@Controller('crossmint')
export class CrossmintController {
  constructor(private readonly crossmintService: CrossmintService) {}

  @Get('credentials/:credentialId')
  async getCredentialByCredentialId(
    @Param('credentialId') credentialId: string,
    @Res() res,
  ): Promise<any> {
    try {
      const result =
        await this.crossmintService.getCredentialByCredentialId(credentialId);
      res.setHeader('Content-Type', 'application/json');
      res.json(result);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('create-attributes')
  async createTemplateAttributes(
    @Body() attributesDto: any,
    @Res() res,
  ): Promise<any> {
    try {
      const result =
        await this.crossmintService.createTemplateAttributes(attributesDto);
      res.setHeader('Content-Type', 'application/json');
      res.json(result);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('create-template')
  async createTemplate(
    @Body() templateDto: CreateTemplateDto,
    @Res() res,
  ): Promise<any> {
    try {
      const result = await this.crossmintService.createTemplate(templateDto);
      res.setHeader('Content-Type', 'application/json');
      res.json(result);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('issue-credential')
  async issueCredential(
    @Body() createOffer: CreateOffer,
    @Res() res,
  ): Promise<any> {
    try {
      const result = await this.crossmintService.issueCredential(createOffer);
      res.setHeader('Content-Type', 'application/json');
      res.json(result);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('verify-credential')
  async verifyCredentials(@Body() verifyCred: any, @Res() res): Promise<any> {
    try {
      const result = await this.crossmintService.verifyCredentials({
        credential: verifyCred,
      });
      res.setHeader('Content-Type', 'application/json');
      res.json(result);
    } catch (error) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
