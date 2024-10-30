import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import fetch from 'node-fetch';
import { CreateOffer } from './dtos/createOffer.dto';
import { CreateTemplateDto } from './dtos/createTemplate.dto';

@Injectable()
export class CrossmintService {
  private readonly myApiKey =
    'sk_staging_5YV5T8355LLd2Htb6JQ6P9WjrApd8Vv8fT9s1TPkfWKBGXdsCPYWVqk3c4AMUT6jNt9CyeDUVbsxuNr9BuFSV6UzEuibUt4U8L7T6wBzf3tTUN4FmBHU7yggMBYhDCAuMsNPpoADskMzCM2c4a23o5GNuYs68Uhff9XKQFNAoTA9CZTAE4ue7uohvj8YqaHRjDmj33iCRPi8EwPB66YTTb4G';

  async getCredentialByCredentialId(credentialId: string): Promise<any> {
    const options = {
      method: 'GET',
      headers: {
        'X-API-KEY': this.myApiKey,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(
        `https://staging.crossmint.com/api/v1-alpha1/credentials/${credentialId}`,
        options,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new HttpException(data, HttpStatus.BAD_REQUEST);
      }

      return data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createTemplateAttributes(templateAttributes: any): Promise<any> {
    const options = {
      method: 'POST',
      headers: {
        'X-API-KEY': this.myApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(templateAttributes),
    };

    try {
      const response = await fetch(
        `https://staging.crossmint.com/api/v1-alpha1/credentials/types`,
        options,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new HttpException(data, HttpStatus.BAD_REQUEST);
      }

      return data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createTemplate(templateDto: CreateTemplateDto): Promise<any> {
    const templateParams = templateDto;

    const options = {
      method: 'POST',
      headers: {
        'X-API-KEY': this.myApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(templateParams),
    };

    try {
      const response = await fetch(
        `https://staging.crossmint.com/api/v1-alpha1/credentials/templates/`,
        options,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new HttpException(data, HttpStatus.BAD_REQUEST);
      }

      return data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async issueCredential(createOffer: CreateOffer): Promise<any> {
    const credentialParams = {
      recipient: `email:${createOffer?.email}:polygon-amoy`,
      credential: createOffer?.credential,
    };

    const options = {
      method: 'POST',
      headers: {
        'X-API-KEY': this.myApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentialParams),
    };

    try {
      const response = await fetch(
        `https://staging.crossmint.com/api/v1-alpha1/credentials/templates/${createOffer.templateId}/vcs`,
        options,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new HttpException(data, HttpStatus.BAD_REQUEST);
      }

      return data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async verifyCredentials(verifyCred: any): Promise<any> {
    const unencryptedCredential = verifyCred;

    const options = {
      method: 'POST',
      headers: {
        'X-API-KEY': this.myApiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(unencryptedCredential),
    };

    try {
      const response = await fetch(
        `https://staging.crossmint.com/api/v1-alpha1/credentials/verification/verify`,
        options,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new HttpException(data, HttpStatus.BAD_REQUEST);
      }

      return data;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
