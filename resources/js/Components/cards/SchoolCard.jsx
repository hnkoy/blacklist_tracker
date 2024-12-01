import {  faEdit,  faEye,  faSchool, faTrash, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

export default function SchoolCard(props) {
    return (
        <div  className="overflow-hidden c bg-white shadow-sm sm:rounded-lg">
              <div className=" flex justify-end p-1 items-center text-red-400 ">
              <Link href={props.show_route}> <FontAwesomeIcon onClick={props.onEdit} className="mx-2 " icon={faEye} /></Link>
                <Link href={props.route}> <FontAwesomeIcon onClick={props.onEdit} className="mx-2 " icon={faEdit} /></Link>
                <FontAwesomeIcon onClick={props.onDelete} className="mx-2 cursor-pointer" icon={faTrash} />

                </div>
            <div className="p-2 px-4 text-gray-900 flex">

                <div className="border h-10 flex justify-center items-center w-10  rounded-full">
                <FontAwesomeIcon icon={faSchool} />
                </div>

                <div className="ml-3 flex flex-col">
                    <span className=" font-bold">{props.name}</span>

                    {props.blackList_number && <div className=" text-xs text-red-400 mt-1">
                    <FontAwesomeIcon icon={faUserSecret} />
                    <span className="font-bold ml-2  ">{props.blackList_number}</span>
                    <span className="font-extralight ml-1  ">BlackListed</span>
                    </div>}

                </div>

            </div>
        </div>
    );
}
