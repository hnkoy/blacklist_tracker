

import {
    Listbox,
    ListboxItem
  } from "@nextui-org/listbox";


export default function BlackListDetails(props) {

    const reasonItems = props.reasons?.map((item) => (
        <ListboxItem
          key={item.id}
          description={item?.pivot?.comment}
        //   startContent={<FontAwesomeIcon className={iconClasses} icon={faTimes} />}
        >
         <span className=" font-bold"> {item.title} </span>
        </ListboxItem>
    ));
  return (
    <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      <Listbox variant="flat" aria-label="Listbox menu with descriptions">
       {reasonItems}

      </Listbox>
    </div>
  );
}
