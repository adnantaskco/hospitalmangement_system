
"use client";

type UpdateDoctorButtonProps = {
  onConfirm: () => void;
};

export default function UpdateDoctorButton({
  onConfirm,
}: UpdateDoctorButtonProps) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const confirmed = window.confirm(
      "Are you sure you want to update this doctor?"
    );

    if (!confirmed) {
      event.preventDefault();
      return;
    }

    onConfirm();
  }

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
    >
      Update Doctor
    </button>
  );
}

