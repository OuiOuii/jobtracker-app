import { columns } from "./columns";
import { DataTable } from "./data-table";

function getData() {
    // Fetch data from your API here.
    return [
        {
            company: "Tech Corp",
            position: "Software Engineer",
            location: "New York, NY",
            status: "Applied",
            setup: "Onsite",
            date_applied: "2023-10-01",
            salary: "$120,000",
            contact_person: "John Doe",
            link: "https://example.com/job/1",
        },
        {
            company: "Innovatech",
            position: "Data Scientist",
            location: "San Francisco, CA",
            status: "Interview Scheduled",
            setup: "Remote",
            date_applied: "2023-09-15",
            salary: "$130,000",
            contact_person: "Jane Smith",
            link: "https://example.com/job/2",
        },
        {
            company: "Web Solutions",
            position: "Frontend Developer",
            location: "Austin, TX",
            status: "Rejected",
            setup: "Onsite",
            date_applied: "2023-08-20",
            salary: "$110,000",
            contact_person: "Alice Johnson",
            link: "https://example.com/job/3",
        },
    ];
}

export default function JobListContent() {
    const data = getData();

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}