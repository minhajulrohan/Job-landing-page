
export const downloadJobAsText = (job: {
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
  salary?: string;
}) => {
  const content = `
Job Title: ${job.title}
Company: ${job.company}
Location: ${job.location}
Type: ${job.type}
${job.salary ? `Salary: ${job.salary}` : ''}

Description:
${job.description}

---
Downloaded from AllJobNow
`;

  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${job.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const downloadAllJobsAsText = (jobs: Array<{
  title: string;
  company: string;
  location: string;
  description: string;
  type: string;
  salary?: string;
}>) => {
  const content = jobs.map((job, index) => `
Job ${index + 1}:
Title: ${job.title}
Company: ${job.company}
Location: ${job.location}
Type: ${job.type}
${job.salary ? `Salary: ${job.salary}` : ''}

Description:
${job.description}

${'='.repeat(50)}
`).join('\n');

  const finalContent = `All Job Listings\n${'='.repeat(50)}\n${content}\n\nDownloaded from AllJobNow`;

  const blob = new Blob([finalContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'all_jobs.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
