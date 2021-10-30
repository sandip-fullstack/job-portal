import { useEffect, useState } from "react";
import Button from "../../libraries/button";
import ListTile from "./ListTile";

const JobListingSection = ({isLoading, isError,
    error, data,
    isPreviousData, freeLancerId,
    onPagination,  filterApplied,
    onJobApply}) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    onPagination(page)
  }, [page, onPagination]);

  useEffect(() => {
    setPage(1);
  }, [filterApplied]);

  return (
    <div className="flex flex-column items-center mw7-l">
      {
        isLoading ? 
          <div>Loading...</div>
        : isError ? (
          <div>Error: {error.message}</div>
        ) 
        : (
          <div>
            {data.results.map(result => (
              <ListTile key={result.ID}
                result={result}
                freeLancerId={freeLancerId}
                onJobApply={onJobApply}
                onJobEdit={null}
              />
            ))}
          </div>
        )
      }
      {
        data?.results?.length > 0 ?
        <div className="flex items-center">
          <Button
            onClick={() => setPage(old => Math.max(old - 1, 1))}
            disabled={page === 1}>Previous</Button>
          <span className="mh3">{page}</span>
          <Button
          onClick={() => {
            if (!isPreviousData && data.next) {
              setPage(old => old + 1)
            }
          }}
          // Disable the Next Page Button until we know a next page is available
          disabled={isPreviousData || !data?.next}
        >
          Next
        </Button>
        </div>
        : "No results found"
      }
      
    </div>
  )
}

export default JobListingSection;