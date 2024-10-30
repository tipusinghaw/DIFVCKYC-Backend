import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';

class CredentialsDto {
  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  encryption: string;

  @ApiProperty()
  @IsString()
  storage: string;
}

class MetadataDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  imageUrl: string;
}

export class CreateTemplateDto {
  @ApiProperty()
  @IsObject()
  credentials: CredentialsDto;

  @ApiProperty()
  @IsObject()
  metadata: MetadataDto;

  @ApiProperty()
  @IsString()
  chain: string;
}
