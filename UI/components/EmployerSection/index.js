import ListTile from "../JobListingSection/listTile";

const EmployerSection = ({data, isLoading, isError, error, onJobEdit}) => {
  return (
    <>
      {
        isLoading ? 
          <div>Loading...</div>
        : isError ? (
          <div>Error: {error.message}</div>
        ) 
        : (
          <div>
            {data?.map(result => (
              <ListTile key={result.ID}
                result={result}
                freeLancerId={""}
                isEmployerScreen={true}
                onJobApply={null}
                onJobEdit={onJobEdit}/>
            ))}
          </div>
        )
      }
    </>
  )
}

export default EmployerSection;