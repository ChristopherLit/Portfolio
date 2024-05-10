import { notificationImages } from "../constants/index.js";

const Notification = ({ className, title, imageName }) => {
    let notificationImageSrc;

  if (imageName === "image-1.png") {

    notificationImageSrc = notificationImages[0];
  } else if (imageName === "image-2.png") {
    notificationImageSrc = notificationImages[1];
  } else if (imageName === "image-3.png") {
    notificationImageSrc = notificationImages[2];
  }

  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notificationImageSrc}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-0 font-semibold text-lg">{title}</h6>

        <div className="flex items-center justify-between">
          
        
        </div>
      </div>
    </div>
  );
};

export default Notification;