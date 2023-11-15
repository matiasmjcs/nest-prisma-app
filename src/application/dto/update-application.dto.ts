import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationDto } from './create-application.dto';
import { IsOptional } from 'class-validator';

export class UpdateApplicationDto extends PartialType(CreateApplicationDto) {
  @IsOptional()
  name: string;
  @IsOptional()
  description: string;
}
