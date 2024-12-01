
import React from 'react'
import PrimaryButton from '../PrimaryButton'
import TextAreaInput from '../TextAreaInput'
import InputLabel from '../InputLabel'
import SelectInput from '../SelectInput'







export default function AddReasonContent({ ...props }) {
    const handleFormChange = props.handleFormChange
    const formFields = props.formFields
    const addFields = props.addFields
    const removeFields = props.removeFields



    return (
        <div>
            {
                formFields?.map((form, index) => {
                    return (
                        <div key={index}>

                            <div>
                                <InputLabel htmlFor="reason" value="Bad behavior" />


                                <SelectInput
                                    id="common_reason_id"
                                    type="select"
                                    name='common_reason_id'
                                    className="mt-1 block w-full"
                                    value={form.common_reason_id}
                                    onChange={event => handleFormChange(event, index)}
                                    required
                                    autoComplete="common_reason_id"
                                >
                                    <option disabled defaultValue value="">select one</option>
                                    {props.reason_options}
                                </SelectInput>


                                {/* <InputError className="mt-2" message={errors.gender} /> */}
                            </div>

                            <div className='mt-8 mb-2'>
                                <InputLabel htmlFor="comment" value="Tell us more" />

                                <TextAreaInput
                                    rows="4"
                                    cols="50"
                                    id="comment"
                                    name='comment'
                                    className="mt-1 block w-full"
                                    value={form.comment}
                                    onChange={event => handleFormChange(event, index)}
                                    required
                                    isFocused
                                    autoComplete="comment"
                                />


                            </div>

                            <PrimaryButton
                                onClick={() => removeFields(index, form.id)}

                            >
                                Remove
                            </PrimaryButton>

                            <hr className='my-4' />
                        </div>
                    )
                })
            }
            <div className='flex'>
                <PrimaryButton
                    onClick={addFields}

                >
                    Add bad behavior
                </PrimaryButton>


            </div>

        </div>
    )
}
