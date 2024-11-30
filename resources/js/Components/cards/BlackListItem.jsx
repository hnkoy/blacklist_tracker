import { faCircleInfo, faFile, faSchool, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlackListItem(props) {
    return (
        <div className="overflow-hidden cursor-pointer    bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 flex">
                <div className="border h-10 flex justify-center items-center w-10  rounded-full">
                <FontAwesomeIcon icon={faUserSecret} />

                </div>

                <div className="ml-3 flex flex-col">
                    <span className=" font-bold">{props.name}</span>


                    <div className=" text-xs mt-1  text-gray-400">
                    <FontAwesomeIcon icon={faSchool} />
                    <span className="font-extralight ml-1  ">{props.school}</span>
                    </div>





                    <div className="grid grid-cols-2 gap-4 mt-2">


                    <div className=" text-xs mt-1 text-gray-400">
                    <FontAwesomeIcon icon={faFile} />
                    <span className="font-extralight ml-1  ">{props.file_number} Documents</span>
                    </div>


                    <div className=" text-xs mt-1 text-red-400">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <span className="font-extralight ml-1  ">{props.reason_number} reasons</span>
                    </div>

                    </div>





                </div>

            </div>
        </div>
    );
}
