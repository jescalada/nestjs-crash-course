import {
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: any) {
    const parseAgeToInt = parseInt(value.age);
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number bru`);
      throw new HttpException(
        'Invalid Data Type for age property. Expected a number',
        HttpStatus.BAD_REQUEST,
      );
    }
    return { ...value, age: parseAgeToInt };
  }
}
