import { IsNotEmpty, IsString } from 'class-validator';

export class CreateApplicationDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
