import { useState } from "react";
import styles from "./contact.module.scss";
import { PageTitle } from "components";

const field = <T,>(value: T, error: string = "") => ({
    value,
    error,
})

type FormField<T> = {
    value: T,
    error: string;
}

type FormState = {
    name: FormField<string>,
    phoneNumber: FormField<string>,
    emailAddress: FormField<string>,
    postcode: FormField<string>,
    dates: FormField<string[]>,
    message: FormField<string>,
};

const ContactPage = () => {
    const [formState, setFormState] = useState<FormState>({
        name: field(""),
        phoneNumber: field(""),
        emailAddress: field(""),
        postcode: field(""),
        dates: field([""]),
        message: field(""),
    })

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        const {
            name,
            phoneNumber,
            emailAddress,
            postcode,
            dates,
            message
        } = formState;

        if (!name.value.length) {
            name.error = "Name required";
        }

        if (!phoneNumber.value.length && !emailAddress.value.length) {
            phoneNumber.error = "Phone or email required";
        }

        if (!postcode.value.length) {
            postcode.error = "Postcode required";
        }

        const today = new Date();
        const formattedToday = today.toISOString().split('T')[0];

        if (!dates.value.every(date => !date.length || date >= formattedToday)) {
            dates.error = "Dates must be today or in the future";
        }

        if (!message.value.length) {
            message.error = "Message required";
        }

        const newState = {
            name,
            phoneNumber,
            emailAddress,
            postcode,
            dates,
            message
        };

        setFormState(newState);

        if (Object.values(formState).some((value) => value.error.length)) {
            return; // Prevent the form from submitting
        }

        // TODO: Submit the form
    }

    const onFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        if (id.startsWith("date")) {
            const index = parseInt(id.split("-")[1]);
            const updatedDates = [...formState.dates.value];
            updatedDates[index] = value;
            setFormState({ ...formState, dates: field(updatedDates) });
        } else {
            if (id.startsWith("phone")) {
                setFormState({ ...formState, [id]: field(value), emailAddress: field("") });
            } else if (id.startsWith("email")) {
                setFormState({ ...formState, [id]: field(value), phoneNumber: field("") });
            } else {
                setFormState({ ...formState, [id]: field(value) });
            }
        }
    };

    const addDateField = () => {
        setFormState({ ...formState, dates: field([...formState.dates.value, ""]) });
    };

    const removeDate = (index: number) => {
        setFormState(prevState => ({
            ...prevState,
            dates: field(prevState.dates.value.filter((_, i) => i !== index))
        }));
    };

    return (
        <div className={styles.contactContainer}>
            <PageTitle title="CONTACT" />
            <form onSubmit={onSubmit} name="contact" data-netlify="true" method="POST">
                <div className={styles.fieldGroup}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={formState.name.value} onChange={onFieldChange} />
                    {!!formState.name.error.length &&
                        <p className={styles.errorText}>{formState.name.error}</p>
                    }
                </div>

                <div className={`${styles.fieldGroup}`}>
                    <div className={styles.contactFieldsContainer}>
                        <div className={styles.fieldGroup}>
                            <label htmlFor="emailAddress">Email address:</label>
                            <input type="email" id="emailAddress" value={formState.emailAddress.value} onChange={onFieldChange} />
                        </div>
                        <div className={styles.orText}>or</div>
                        <div className={styles.fieldGroup}>
                            <label htmlFor="phoneNumber">Phone number:</label>
                            <input type="tel" id="phoneNumber" value={formState.phoneNumber.value} onChange={onFieldChange} />
                        </div>
                    </div>
                    {!!formState.emailAddress.error.length &&
                        <p className={styles.errorText}>{formState.emailAddress.error}</p>
                    }
                    {!!formState.phoneNumber.error.length &&
                        <p className={styles.errorText}>{formState.phoneNumber.error}</p>
                    }
                </div>

                <div className={styles.fieldGroup}>
                    <label htmlFor="postcode">Postcode:</label>
                    <input type="text" id="postcode" value={formState.postcode.value} onChange={onFieldChange} />
                    {!!formState.postcode.error.length &&
                        <p className={styles.errorText}>{formState.postcode.error}</p>
                    }
                </div>

                <div className={styles.fieldGroup}>
                    <label htmlFor="dates">Dates (if known):</label>
                    <div className={styles.dateFieldsContainer}>
                        <div className={styles.datesContainer}>
                            {formState.dates.value.map((date, index) => (
                                <div key={`date-container-${index}`} className={styles.dateInputContainer}>
                                    <input
                                        type="date"
                                        id={`date-${index}`}
                                        value={date}
                                        onChange={onFieldChange}
                                    />
                                    <div className={styles.removeDateButton} onClick={() => removeDate(index)}>×</div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.addButtonContainer}>
                            <div className={styles.addButton} onClick={addDateField}>+</div>
                        </div>
                    </div>
                    {!!formState.dates.error.length &&
                        <p className={styles.errorText}>{formState.dates.error}</p>
                    }
                </div>

                <div className={styles.fieldGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={formState.message.value} onChange={onFieldChange} />
                    {!!formState.message.error.length &&
                        <p className={styles.errorText}>{formState.message.error}</p>
                    }
                </div>

                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default ContactPage;