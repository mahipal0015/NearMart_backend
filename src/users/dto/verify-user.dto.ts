import { IsEmail, IsEmpty, IsEnum, IsMobilePhone, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

enum userTypes {
  BUYER='BUYER',
  SELLER='SELLER'
}

enum countryCode { india='IN'};

export class VerifyUserDto {
  @IsEnum(countryCode)
  country: string;

  @IsMobilePhone()
  mobile: number;

  @IsNumber()
  otp: number;

  @IsEnum(userTypes)
  type: string;
}