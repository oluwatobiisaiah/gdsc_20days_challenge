import { container } from 'tsyringe';
import AuthorRepository from '../../repositories/author.repository';

container.register("AuthorRepository",{useClass:AuthorRepository})

export default container