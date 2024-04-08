import bcrypt from 'bcryptjs';

export const generateUsername = (firstName: string,existingNames:Array<string>, lastName?: string): string => {
    const baseUsername = lastName ? `${firstName}${lastName}` : firstName;
    let username = baseUsername.toLowerCase().replace(/\s/g, '');
  
    let counter = 1;
    while (existingNames.includes(username)) {
      username = baseUsername.toLowerCase().replace(/\s/g, '') + counter;
      counter++;
    }
  
    return username;
  }
  
  export const hashString = (password:string) => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  
  export const compareHashedSting = (password:string, hashedPassword:string) => bcrypt.compareSync(password, hashedPassword)