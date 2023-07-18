import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

type Props = {
    imageName: string
    width?: number
    height?: number
}
const CloudinaryProvider = ({imageName, height = 250, width = 250}: Props) => {

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dumtd7dhj'
        }
    });
    const myImage = cld.image(imageName);
    myImage.resize(fill().width(width).height(height));

    return (
        <AdvancedImage cldImg={myImage}/>
    )
};
export default CloudinaryProvider
