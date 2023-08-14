# Postcode Lookup

<!-- <PostcodeLookup onSelect={addressSelect} data-test="postcode-lookup" /> -->

```js
<PostcodeLookup data-test="postcode-lookup" />
```
<!-- {!showAddressInputs && ( -->
<!--   <> -->
<!--     {line1 && town && postcode && ( -->
<!--       <div css={{ margin: `${spacing('l')} 0` }}> -->
<!--         {/* The school lookup returns a name value, the postcode one doesn't */} -->
<!--         {useSchoolLookup && <Text tag="p" size="m">{orgName}</Text>} -->
<!--         <Text tag="p" size="m">{line1}</Text> -->
<!--         {line2 && <Text tag="p" size="m">{line2}</Text>} -->
<!--         {line3 && <Text tag="p" size="m">{line3}</Text>} -->
<!--         <Text tag="p" size="m">{town}</Text> -->
<!--         <Text tag="p" size="m">{postcode}</Text> -->
<!--       </div> -->
<!--     )} -->
<!--     <Grid columns={2} mobileColumns={1}> -->
<!--       <ButtonAsLink onClick={() => setShowAddressInputs(true)}> -->
<!--         {(line1 && town && postcode) -->
<!--           ? 'Edit address' -->
<!--           : 'Or enter address manually'} -->
<!--       </ButtonAsLink> -->
<!--     </Grid> -->
<!--     {getError(FIELDS.LINE1) && ( -->
<!--       <ErrorText weight="bold"> -->
<!--         {isSchool -->
<!--           ? 'Please find your organisation or enter the details manually' -->
<!--           : 'Please find your address or enter the details manually'} -->
<!--       </ErrorText> -->
<!--     )} -->
<!--   </> -->
<!-- )} -->
