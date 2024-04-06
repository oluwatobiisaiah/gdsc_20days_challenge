import Joi, { AnySchema } from "joi";

type DtoSchema<T> = {
    [K in keyof T]: AnySchema;
  };
  
  function returnInterface<T>(schema: DtoSchema<T>): T {
    const result: Partial<T> = {};
    for (const key in schema) {
      if (Object.prototype.hasOwnProperty.call(schema, key)) {
        const property = schema[key] as AnySchema;
        const typeString = property.describe().type;
        if (typeString) {
          const type = typeString.split(".")[1];
          result[key] = type as unknown as T[Extract<keyof T, string>];
        }
      }
    }
    return result as T;
  }
  
  export function createSchemaFromDto(dto: Record<string, Joi.Schema>): Joi.Schema {
    return Joi.object(dto);
  }
  