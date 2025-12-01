"use client";

import React, { useEffect, useState, useActionState } from "react";
import {
  createJobLocationAction,
  type LocationFormState,
} from "@/app/admin/careers/actions";

type JobLocationForForm = {
  _id: string;
  name: string;
};

interface JobLocationSelectorProps {
  locations: JobLocationForForm[];
  selectedLocationIds?: string[];
}

export function JobLocationSelector({
  locations: initialLocations,
  selectedLocationIds,
}: JobLocationSelectorProps) {
  const [currentLocations, setCurrentLocations] = useState(initialLocations);
  const [showNewLocationForm, setShowNewLocationForm] = useState(false);
  const [locationName, setLocationName] = useState("");
  const [state, dispatch] = useActionState<LocationFormState, FormData>(
    createJobLocationAction,
    {}
  );

  useEffect(() => {
    if (state.location) {
      setCurrentLocations((prev) => [...prev, state.location!]);
      setLocationName("");
      setShowNewLocationForm(false);
    }
  }, [state]);

  useEffect(() => {
    setCurrentLocations(initialLocations);
  }, [initialLocations]);

  async function handleAddLocation() {
    if (!locationName.trim()) return;
    const formData = new FormData();
    formData.append("name", locationName.trim());
    // Fire the server action without using a nested <form>
    dispatch(formData);
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Locations</label>
      <div className="flex flex-wrap gap-2">
        {currentLocations.map((loc) => {
          const checked = (selectedLocationIds || []).includes(loc._id);
          return (
            <label
              key={loc._id}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs sm:text-sm cursor-pointer hover:border-orange-400 hover:bg-orange-50"
            >
              <input
                type="checkbox"
                name="locationIds"
                value={loc._id}
                defaultChecked={checked}
                className="h-3 w-3 rounded border border-neutral-300"
              />
              <span>{loc.name}</span>
            </label>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => setShowNewLocationForm((v) => !v)}
        className="text-sm text-blue-600 hover:underline"
      >
        {showNewLocationForm ? "Cancel new location" : "+ New location"}
      </button>

      {showNewLocationForm && (
        <div className="mt-2 space-y-2">
          <input
            type="text"
            name="name"
            placeholder="e.g. Remote (USA)"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm"
            required
          />
          {state.fieldErrors?.name && (
            <p className="text-xs text-red-600">{state.fieldErrors.name[0]}</p>
          )}
          <button
            type="button"
            onClick={handleAddLocation}
            className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white"
          >
            Add location
          </button>
        </div>
      )}

      <p className="text-xs text-neutral-500">
        Select one or more locations this role can be based in.
      </p>
    </div>
  );
}


