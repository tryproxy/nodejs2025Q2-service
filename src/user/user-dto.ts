import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  login: string;

  @IsString()
  @MinLength(3)
  password: string;
}

export class UpdatePasswordDto {
  @IsString()
  @MinLength(3)
  oldPassword: string;

  @IsString()
  @MinLength(3)
  newPassword: string;
}
