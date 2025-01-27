const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: "dsbxesykt",
			api_key: "158865459621586",
			api_secret: "FiwZywkFAV4KJor9QGycNvpw49Y",
		});
	} catch (error) {
		console.log(error);
	}
};