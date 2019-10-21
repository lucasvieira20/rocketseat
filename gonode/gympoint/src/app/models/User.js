import Sequelize, { Model } from "sequelize";

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password_hash: Sequelize.STRING,
				administrator: Sequelize.BOOLEAN
			},
			{
				// 2nd parameter
				sequelize
			}
		);
	}
}

export default User;
