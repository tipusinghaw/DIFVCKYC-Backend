import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class SubjectDto {
  [key: string]: string;
}

export class CreateOffer {
  @ApiProperty({ example: 'john.doe@yopmail.com' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsString({ message: 'Email should be a string' })
  email: string;

  @ApiProperty({ example: '76109282-87ca-4025-88df-e4bf77e5e139' })
  @IsNotEmpty({ message: 'Template Id is required' })
  @IsString({ message: 'Template Id should be a string' })
  templateId: string;

  @ApiProperty({ example: 'john.doe@yopmail.com' })
  @IsObject()
  credential: {
    subject: SubjectDto;
    expiresAt: string;
  };
}
