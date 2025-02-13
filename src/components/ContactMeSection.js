import React, {useEffect, useState, useRef} from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LandingSection = () => {

  const {register,reset, setValue, handleSubmit, formState:{errors,isSubmitSuccessful,isSubmitting, isValid}} = useForm({
    mode: 'onChange', reValidateMode: 'onChange' ,
    defaultValues: {
      firstName:'',
      email:'',
      type:'',
      comment:''
    }
  })

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState("");

  const [isSubmitted,setIsSubmitted] = useState(false)
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  let name = document.getElementById('firstName')
  useEffect(() => {
    setValue('subject', `a new person sent a message from Website`)
  }, [ setValue]);
 
  const onSubmit = async(data,e) => {
    setIsSubmitted(true)
    await sleep(1000)
    e.preventDefault()
    setIsSubmitted(false)
    console.log('data',data)
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
    onOpen('success','Your info was sent, thanks for your contact.')
  }

  const onerror = (error) => {
    console.log('error',error)
    if(isValid) {
      onOpen('error','Something went wrong , please try again later.')
      reset()
    }
    else {
      return
    }
  }

  return (
    <FullScreenSection
      isDarkBackground
      bgGradient="linear(cyan.100, pink.500)"
      _dark={{bgGradient:'linear(gray.400, black)'}}
      py={16}
      spacing={8}
    >
      <VStack w='100vw' px={{base:0,sm:8,base:10}} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" color='#28282B' _dark={{color:'#FFF'}}>
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%" >
          <form 
          action="https://api.web3forms.com/submit" method="POST"
          onSubmit={handleSubmit(onSubmit,onerror)}
          >
            <VStack spacing={4}>
            <input
              type="hidden"
              value="5a211f9f-ff10-47ab-bdb4-7c62268b5b1f"
              {...register("access_key")}
            />
            <input
              type="hidden"
              {...register("subject")}
            />
            <input
              type="hidden"
              value="Mission Control"
              {...register("from_name")}
            />
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}></input>
              <FormControl>
              <input type="hidden" name="access_key" value="5a211f9f-ff10-47ab-bdb4-7c62268b5b1f" />
                <FormLabel htmlFor="firstName" color='#28282B' _dark={{color:'#FFF'}}>Name</FormLabel>
                <Input {...register('firstName', {required: 'Required'})}
                  id="firstName"
                  name="firstName"
                />
                {errors.firstName ? <div style={{color:'rgb(250, 41, 41)'}}>{errors.firstName?.message}</div> :null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" color='#28282B' _dark={{color:'#FFF'}}>Email Address</FormLabel>
                <Input {...register('email', {required: 'Required',})}
                  id="email"
                  name="email"
                  type="email"
                />
                {errors.email ? <div style={{color:'rgb(250, 41, 41)'}}>{errors.email?.message}</div> :null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type" color='#28282B' _dark={{color:'#FFF'}}>Type of enquiry</FormLabel>
                <Select {...register('type', {required: 'Required'})} id="type" name="type" >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Invite for collaboration
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="comment" color='#28282B' _dark={{color:'#FFF'}}>Your message</FormLabel>
                <Textarea {...register('comment', {required: 'Required'})}
                  id="comment"
                  name="comment"
                  height={250}
                />
                {errors.comment ? <div style={{color:'rgb(250, 41, 41)'}}>{errors.comment?.message}</div> :null}
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              </FormControl>
              <Button type="submit" colorScheme="pink" width="full">
                {isSubmitted? <FontAwesomeIcon icon={faSpinner} /> :'Submit'}
              </Button>
              <input type="hidden" name="apikey" value="YOUR_ACCESS_KEY_HERE"></input>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
