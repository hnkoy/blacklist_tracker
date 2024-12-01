import AddAttachedDocument from '@/Pages/BlackList/form/AttachedDocumentItems';
import AddReasonContent from '@/Components/form/AddReasonContent';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Select from 'react-select'





export default function CreatePage(props) {
    const schools = usePage().props.schools;

    const studentTeachers = usePage().props.studentTeachers;
    const reasons = usePage().props.reasons;
    const [formFields, setFormFields] = useState([])

    const [attachedDocumentFields, setAttachedDocumentFields] = useState([])

    const { data, setData, post, errors, reset,recentlySuccessful } = useForm({
        'reasonContent': [],
        'school_id': '',
        'student_teacher_id': '',
        'attachedDocuments':[]


    });



    const handleFormChange = (event, index) => {
        let data = [...formFields]
        data[index][event.target.name] = event.target.value
        setFormFields(data)
        setData('reasonContent', data);
    }

    const removeFields = (index) => {
        let data = [...formFields]
        data.splice(index, 1)
        setFormFields(data)
    }

    const addFields = (e) => {
        e.preventDefault()

        let object = {
            common_reason_id: '',
            comment: '',

        }
        setFormFields([...formFields, object])
        setData('reasonContent', object);
    }


    const handleAttachedDocFormChange = (event, index,isFile=false) => {
        let data = [...attachedDocumentFields]

        if(isFile){
            data[index][event.target.name] = event.target.files[0]
        }
        data[index][event.target.name] = event.target.value
        setAttachedDocumentFields(data)
        setData('attachedDocuments', data);
    }

    const removeAttachedDocFields = (index) => {
        let data = [...attachedDocumentFields]
        data.splice(index, 1)
        setAttachedDocumentFields(data)
    }

    const addAttachedDocFields = (e) => {
        e.preventDefault()

        let object = {
            document_type: '',
            file_path: '',

        }
        setAttachedDocumentFields([...attachedDocumentFields, object])
        setData('attachedDocuments', object);
    }


    const school_options = schools?.map((item) => ({
        value: item?.id,
        label: item?.name,
    }));

    const student_options = studentTeachers?.map((item) => ({
        value: item?.id,
        label: item?.firstname + ' ' + item?.lastname,
    }));



    const reason_options = reasons?.map((item) => (
        <option key={item?.id} value={item?.id}>{item?.title}</option>
    ));

    const submit = (e) => {
        e.preventDefault();
        post(route('blackList.store'),{
            forceFormData: true,
           onSuccess: () => reset(),
        });

    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create a new BlackList record
                </h2>
            }
        >
            <Head title=" Create a new BlackList record" />

            <form onSubmit={submit}>
                <div className="py-12">
                    <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <div>
                                <InputLabel htmlFor="reason" value="Select a Student Teacher" />
                                <Select className="mt-1 block w-full"
                                    options={student_options}
                                    name='student_teacher_id'
                                    data={data.student_teacher_id}
                                    onChange={(e) => setData('student_teacher_id', e.value)}
                                />


                                <InputError className="mt-2" message={errors.student_teacher_id} />
                            </div>

                            <div className='mt-4'>
                                <InputLabel htmlFor="reason" value="Select a School" />
                                <Select className="mt-1 block w-full"
                                    name='school_id'
                                    data={data.school_id}
                                    onChange={(e) => setData('school_id', e.value)}
                                    options={school_options} />


                                <InputError className="mt-2" message={errors.school_id} />
                            </div>
                        </div>

                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <AddReasonContent
                                reason_options={reason_options}
                                handleFormChange={handleFormChange}
                                formFields={formFields}
                                addFields={addFields}
                                removeFields={removeFields}
                            />

                            <InputError className="mt-2" message={errors.reasonContent} />
                        </div>


                        {/* <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <AddAttachedDocument

                                handleFormChange={handleAttachedDocFormChange}
                                formFields={attachedDocumentFields}
                                addFields={addAttachedDocFields}
                                removeFields={removeAttachedDocFields}
                            />

                            <InputError className="mt-2" message={errors.attachedDocuments} />
                        </div> */}



                        <div className="bg-white flex justify-end p-4 shadow sm:rounded-lg sm:p-8">
                            <PrimaryButton


                            >
                                Save record
                            </PrimaryButton>
                        </div>


                    </div>

                </div>
            </form>

        </AuthenticatedLayout>
    );
}
