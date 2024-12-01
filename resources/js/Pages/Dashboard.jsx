import BlackListItem from '@/Components/cards/BlackListItem';
import LinkButton from '@/Components/LinkButton';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
    const black_list = usePage().props.black_list_data;
    const flash = usePage().props.flash;
    useEffect(()=>{
        if(flash.message.success) {
            toast.success(flash.message.success);
        }

        if(flash.message.error) {
            toast.success(flash.message.error);
        }

    },[flash])

    // console.log(black_list);

    const blackListItems = black_list?.data?.map((item) => (
        <BlackListItem
            name={item?.student_teacher?.firstname + ' ' + item?.student_teacher?.lastname}
            school={item?.school?.name}
            file_number={item?.attached_documents_count}
            reason_number={item.black_listed_reasons_count}
        />
    ));

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Black List
                    <Accordion>
      <AccordionItem

      header={
        <>
          {'What is Lorem Ipsum?'}
          <FontAwesomeIcon icon={faChevronDown} />
          {/* <img className={styles.chevron} src={chevronDown} alt="Chevron Down" /> */}
        </>
      }
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit
        amet ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>
                </h2>
            }
        >
            <Head title="Dashboard" />

            <ToastContainer />
            <div className="mt-4  px-12 flex items-center justify-end">

                <LinkButton href={route('blackList.create')} className="ms-4">
                    Add New
                </LinkButton>

            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='grid grid-cols-3 gap-4'>
                        {blackListItems}



                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
