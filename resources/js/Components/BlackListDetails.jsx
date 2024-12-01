

import { Link } from "@inertiajs/react";
import {
    Listbox,
    ListboxItem,
    ListboxSection
} from "@nextui-org/listbox";


export default function BlackListDetails(props) {

    const reasonItems = props.reasons?.map((item, index) => (
        <ListboxSection className="border" showDivider title={`reason ${index + 1}`}>
            <ListboxItem
                showDivider
                key={item.id}
                description={item?.pivot?.comment}
            //   startContent={<FontAwesomeIcon className={iconClasses} icon={faTimes} />}
            >
                <span className=" font-bold"> {item.title} </span>

            </ListboxItem>
        </ListboxSection >
    ));

    const documentItems = props?.documents?.map((item) => (
        <ListboxItem>
            <a key={item.id} href={item.file_path} className="flex text-xs mt-4">
                <span>{item.document_type}: </span>
                <span className= "text-blue-500 ">{item.file_path}</span>
            </a>
        </ListboxItem>

    ));
    return (
        <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
            <Listbox variant="flat" aria-label="Listbox menu with descriptions">
                {reasonItems}

                <ListboxSection className="border" showDivider title={`Attached Documents`}>
                    {documentItems}
                </ListboxSection>

            </Listbox>
        </div>
    );
}
