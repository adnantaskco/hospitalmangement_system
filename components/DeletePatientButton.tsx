
"use client";

import { deletePatient } from "@/app/actions/patient";

type Props = {
  id: number;
};

export default function DeletePatientButton({ id }: Props) {
  async function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmed) {
      return;
    }

    const result = await deletePatient(id);

    if (result.success) {
      alert("Patient deleted successfully!");

      window.location.reload();
    } else {
      alert(result.message);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
    >
      Delete
    </button>
  );
}

