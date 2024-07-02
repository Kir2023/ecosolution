import {
  ContactUsWrapper,
  ContactsHeader,
  BigWrapper,
  ContactsWrapper,
  ContactWrapper,
  ContactsHeaders,
  PhoneEmailLinks,
  SVGContacts,
  Address,
  SocialNetworksWrapper,
  SVGSocialNetworks,
  SocialNetworksLink,
  SubmitFormButton,
  SVGArrow,
  FormWrapper,
  StyledForm,
  StyledField,
  ErrMessage,
} from "./ContactUs.styled";
import sprite from "../../assets/sprite.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { Notify } from "notiflix";

const ContactUs = () => {
  const handleSubmit = (values, { resetForm }) => {
    Notify.success("Form submitted successfully");
    resetForm();
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[a-zA-Zа-яА-Я\s]+$/, "Name can only contain letters")
      .required("Please enter full name"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      )
      .required("Please enter email"),
    phone: Yup.string()
      .matches(/^\d{12}$/, "Phone number must be exactly 12 digits")
      .required("Please enter your phone number"),
    message: Yup.string(),
  });

  return (
    <ContactUsWrapper>
      <ContactsHeader>Contact us</ContactsHeader>
      <BigWrapper>
        <ContactsWrapper>
          <ContactWrapper>
            <ContactsHeaders>Phone:</ContactsHeaders>
            <PhoneEmailLinks href="tel:+380981234567">
              <SVGContacts>
                <use href={`${sprite}#icon-phone`} />
              </SVGContacts>
              38 (098) 12 34 567
            </PhoneEmailLinks>
            <PhoneEmailLinks href="tel:+380931234567">
              <SVGContacts>
                <use href={`${sprite}#icon-phone`} />
              </SVGContacts>
              38 (093) 12 34 567
            </PhoneEmailLinks>
          </ContactWrapper>
          <ContactWrapper>
            <ContactsHeaders>E-mail:</ContactsHeaders>
            <PhoneEmailLinks href="mailto:office@ecosolution.com">
              <SVGContacts>
                <use href={`${sprite}#icon-email`} />
              </SVGContacts>
              office@ecosolution.com
            </PhoneEmailLinks>
          </ContactWrapper>
          <ContactWrapper>
            <ContactsHeaders>Address:</ContactsHeaders>
            <Address>
              <SVGContacts>
                <use href={`${sprite}#icon-map`} />
              </SVGContacts>
              <span>79005, Ukraine, Lviv, street Shota Rustaveli, 7</span>
            </Address>
          </ContactWrapper>
          <ContactWrapper>
            <ContactsHeaders>Social Networks:</ContactsHeaders>
            <SocialNetworksWrapper>
              <SocialNetworksLink
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGSocialNetworks>
                  <use href={`${sprite}#icon-facebook`} />
                </SVGSocialNetworks>
              </SocialNetworksLink>
              <SocialNetworksLink
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGSocialNetworks>
                  <use href={`${sprite}#icon-instagram`} />
                </SVGSocialNetworks>
              </SocialNetworksLink>
            </SocialNetworksWrapper>
          </ContactWrapper>
        </ContactsWrapper>
        <FormWrapper>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <StyledForm>
                <div>
                  <label htmlFor="fullName">* Full name:</label>
                  <StyledField
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Rosie"
                    $haserror={
                      touched.fullName && errors.fullName ? "true" : "false"
                    }
                  />
                  <ErrMessage name="fullName" component="div" />
                </div>
                <div>
                  <label htmlFor="email">* E-mail:</label>
                  <StyledField
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johnrosie@gmail.com"
                    $haserror={touched.email && errors.email ? "true" : "false"}
                  />
                  <ErrMessage name="email" component="div" />
                </div>
                <div>
                  <label htmlFor="phone">* Phone:</label>
                  <StyledField
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="380961234567"
                    $haserror={touched.phone && errors.phone ? "true" : "false"}
                  />
                  <ErrMessage name="phone" component="div" />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <StyledField
                    component="textarea"
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="My message...."
                  />
                  <ErrMessage name="message" component="div" />
                </div>
                <SubmitFormButton type="submit">
                  Send{" "}
                  <SVGArrow>
                    <use href={`${sprite}#icon-big-arrow-right`} />
                  </SVGArrow>
                </SubmitFormButton>
              </StyledForm>
            )}
          </Formik>
        </FormWrapper>
      </BigWrapper>
    </ContactUsWrapper>
  );
};

export default ContactUs;
