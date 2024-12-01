
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Transition } from '@headlessui/react';
import { Head, useForm, usePage } from '@inertiajs/react';
import AttachedDocumentItems from './AttachedDocumentItems';
import LinkButton from '@/Components/LinkButton';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';


export default function AttachedDocumentPage(props) {
    const flash = usePage().props.flash;
    const blackList = usePage().props.blackList;
    const [previewUrl, setPreviewUrl] = useState(null);
    const { data, setData, reset, post, errors, processing, recentlySuccessful } =
        useForm({
            document_type: '',
            file_path: '',
            school_black_list_id: blackList?.id

        });

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }

        if (flash.message.error) {
            toast.success(flash.message.error);
        }

    }, [flash])

    const submit = (e) => {
        e.preventDefault();
        post(route('blackList.storeDocument'),{
            forceFormData: true,
        });
        if (recentlySuccessful) {
            reset();
        }

    };

    const handleFileChange = (event) => {
        setData(event.target.name, event.target.files[0]);
    };


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    BlackListing Final step
                </h2>
            }
        >
            <Head title="Profile" />
            <ToastContainer />
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">


                        <section>
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Add Attached Documents for Blacklisting Ref: {blackList.reference_number}
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Includes supporting documents and proof for blacklisting Ref: {blackList.reference_number}
                                </p>
                            </header>

                            <form onSubmit={submit}  className="mt-6 space-y-6">
                                {/* <AttachedDocumentItems /> */}
                                <div className='mt-8 mb-2'>
                                    <InputLabel htmlFor="document_type" value="Document type" />

                                    <SelectInput
                                        id="document_type"
                                        type="select"
                                        name='document_type'
                                        className="mt-1 block w-full"
                                        value={data.document_type}
                                        onChange={(e) => setData('document_type', e.target.value)}
                                        required
                                        autoComplete="document_type"
                                    >
                                        <option disabled selected value="">select document type</option>
                                        <option value="IMAGE">IMAGE</option>
                                        <option value="VIDEO">VIDEO</option>
                                        <option value="PDF">PDF</option>
                                        <option value="AUDIO">AUDIO</option>
                                    </SelectInput>

                                    <div className='mt-8 mb-2'>
                                        <InputLabel htmlFor="comment" value="Select file" />

                                        {/* <TextInput
                                            type='file'

                                            id="file_path"
                                            name='file_path'
                                            className="mt-1 block w-full"
                                            // value={data.file_path}
                                            onChange={handleFileChange}
                                            required
                                            isFocused
                                            autoComplete="file_path"
                                        /> */}

<input
                        id="file-upload"
                        type="file"
                        name='file_path'
                        onChange={handleFileChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />

                                        <InputError className="mt-2" message={errors.file_path} />
                                    </div>


                                </div>
                                <div className="flex justify-between items-center gap-4">
                                    <PrimaryButton >Attach document</PrimaryButton>

                                    <div className='flex '>
                                        <LinkButton
                                            href={route('dashboard')}
                                        // onClick={addFields}

                                        >
                                            No Document? quit & go to Dashboard
                                        </LinkButton>


                                    </div>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">
                                            Saved.
                                        </p>
                                    </Transition>
                                </div>
                            </form>
                        </section>

                    </div>


                </div>
            </div>
        </AuthenticatedLayout>
    );
}
