import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | undefined;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User | string {
    const user = this.usersRepository.findById(user_id);
    if (!user) {
      throw new Error("User doesn't exists.");
    }
    return user;
  }
}

export { ShowUserProfileUseCase };
