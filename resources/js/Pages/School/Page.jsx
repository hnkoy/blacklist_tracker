import SchoolCard from '@/Components/cards/SchoolCard';
import LinkButton from '@/Components/LinkButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';

export default function SchoolPage() {
    const school_list = usePage().props.school_data;

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this school?")) {
            router.delete(`/schools/destroy/${id}`, {
                onSuccess: () => alert('Item deleted successfully')
            })
        }
    };




    const schoolItems = school_list?.data?.map((item) => (
        <SchoolCard
            key={item.id}
            route={route('school.edit', item.id)}
            onDelete={() => handleDelete(item.id)}
            name={item.name}
            blackList_number={item.black_listed_teachers_count}
        />
    ));
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    School List
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="mt-4  px-12 flex items-center justify-end">

                <LinkButton href={route('school.create')} className="ms-4">
                    Add New
                </LinkButton>

            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='grid grid-cols-3 gap-4'>
                        {schoolItems}



                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
