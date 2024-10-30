// src/dto/unencrypted-credential.dto.ts
import { IsString, IsArray, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// Nested DTOs
class CredentialSubjectDto {
  @IsString()
  course: string;

  @IsString()
  grade: string;

  @IsString()
  id: string;
}

class NftDto {
  @IsString()
  tokenId: string;

  @IsString()
  chain: string;

  @IsString()
  contractAddress: string;
}

class IssuerDto {
  @IsString()
  id: string;
}

class DomainDto {
  @IsString()
  name: string;

  @IsString()
  version: string;

  @IsString()
  chainId: number;

  @IsString()
  verifyingContract: string;
}

class TypesDto {
  @IsArray()
  VerifiableCredential: VerifiableCredentialDto[];

  @IsArray()
  CredentialSubject: CredentialSubjectFieldDto[];

  @IsArray()
  Issuer: IssuerFieldDto[];

  @IsArray()
  Nft: NftFieldDto[];
}

class Eip712Dto {
  @IsObject()
  domain: DomainDto;

  @IsObject()
  types: TypesDto;

  @IsString()
  primaryType: string;
}

class ProofDto {
  @IsString()
  verificationMethod: string;

  @IsString()
  created: string;

  @IsString()
  proofPurpose: string;

  @IsString()
  type: string;

  @IsString()
  proofValue: string;

  @IsObject()
  eip712: Eip712Dto;
}

class VerifiableCredentialDto {
  @IsString()
  name: string;

  @IsString()
  type: string;
}

class CredentialSubjectFieldDto {
  @IsString()
  name: string;

  @IsString()
  type: string;
}

class IssuerFieldDto {
  @IsString()
  name: string;

  @IsString()
  type: string;
}

class NftFieldDto {
  @IsString()
  name: string;

  @IsString()
  type: string;
}

// Main DTO
export class VerifyCredentialsDto {
  @IsString()
  id: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CredentialSubjectDto)
  credentialSubject: CredentialSubjectDto;

  @IsString()
  validUntil: string;

  @IsObject()
  @ValidateNested()
  @Type(() => NftDto)
  nft: NftDto;

  @IsObject()
  @ValidateNested()
  @Type(() => IssuerDto)
  issuer: IssuerDto;

  @IsArray()
  type: string[];

  @IsString()
  validFrom: string;

  @IsArray()
  '@context': string[];

  @IsObject()
  @ValidateNested()
  @Type(() => ProofDto)
  proof: ProofDto;
}
