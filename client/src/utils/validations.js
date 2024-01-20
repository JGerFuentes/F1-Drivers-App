const validations = (inputs) => {
    const errors = {};
    const onlyTextRegex = /^[a-zA-Z\s]+$/;
    const onlyNumbersAndDashes = /^[0-9-]+$/;
    const dobFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    const imageExtensionRegex = /\.(jpg|jpeg|png)$/;

    //Name validations
    if (!inputs.driver_name) {
        errors.driver_name = "You must give your driver a name."
    } else if (!onlyTextRegex.test(inputs.driver_name)) {
        errors.driver_name = "Please, introduce a valid name."
    } else if (inputs.driver_name.length === 1) {
        errors.driver_name = "Please, try a little harder. It's your driver in the end."
    } else if (inputs.driver_name.length > 25) {
        errors.driver_name = "Please, don't loose it. Provide a shorter name."
    }

    //Lastname validations
    if (!inputs.lastname) {
        errors.lastname = "Now give your driver a lastname."
    } else if (!onlyTextRegex.test(inputs.lastname)) {
        errors.lastname = "Please, introduce a valid lastname."
    } else if (inputs.lastname.length === 1) {
        errors.lastname = "All right, we get it. You're testing us. Now please, introduce a longer lastname."
    } else if (inputs.lastname.length > 20) {
        errors.lastname = "Please, keep it simple. Don't trouble yourself."
    }    

    //Nationality validations
    if (!inputs.nationality) {
        errors.nationality = "Introduce your driver's nationality. No one comes from nowhere, you know..."
    } else if (inputs.nationality.length < 5) {
        errors.nationality = "Please, be serious about it. We're all working here."
    }

    //Birthdate validations
    if (inputs.dob.length === 0) {
        errors.dob = "Introduce a birthdate. We all have a release date."
    } else if (!onlyNumbersAndDashes.test(inputs.dob)) {
        errors.dob = "Only numbers and dashes, please."
    } else if (!dobFormatRegex.test(inputs.dob) || inputs.dob.length !== 10) {
        errors.dob = "Please, remember to strictly abide to the format: yyyy-mm-dd. Dashes included."
    } else {
        const [year, month, day] = inputs.dob.split('-').map(Number);

        if (month < 1 || month > 12) {
            errors.dob = "Please enter a valid month between 01 and 12.";
        } else {
            const totalDays = new Date(year, month, 0).getDate();
            if (day < 1 || day > totalDays) {
                errors.dob = `Please enter a valid day between 01 and ${totalDays}.`;
            }
        }
    }

    //Image validations
    if (!inputs.image) {
        errors.image = "Please, associate an image to your driver."
    } else if (!urlRegex.test(inputs.image)) {
        errors.image = "Please, insert a valid URL"
    } else if (!imageExtensionRegex.test(inputs.image)) {
        errors.image = "Only .jpg, .jpeg and .png extensions allowed."
    }

    //Description validations
    if (!inputs.description) {
        errors.description = "Please, introduce a brief description. Everyone has some story to tell."
    } else if(inputs.description.length < 15) {
        errors.description = "Maybe you can try it a little harder."
    } else if (inputs.description.length > 2500) {
        errors.description = "Perhaps that's a bit too much, pal. Keep it under 500 characters."
    }

    //Teams validations
    if (inputs.teams.length === 0) {
        errors.teams = "Select at least one team. Every respected driver has one."
    } else if (inputs.teams.length > 16) {
        errors.teams = "No one would ever dare so much for so little. Please, discard some."
    }

    return errors;
}

export default validations;