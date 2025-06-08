"use client";
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
  YMapMarker,
} from "ymap3-components";
import s from "./styles.module.css";
import MarkerIcon from "./MarkerIcon";
import { Address } from "@/src/entities/contacts/model/types";

const Map = ({ currentContact, addresses, onClick }: MapProps) => {
  const currentCoordinates =
    currentContact &&
    addresses.find((item) => item.id === currentContact)?.coordinates;

  const location = currentCoordinates
    ? {
        center: [currentCoordinates[0], currentCoordinates[1] - 0.004],
        zoom: 16,
      }
    : {
        center: [53.282042, 48.815289],
        zoom: 5,
      };

  return (
    <div className={s.map}>
      <YMapComponentsProvider
        apiKey={"01e77374-c26f-49ab-9589-3e9c8349f150"}
        lang="ru_RU"
      >
        <YMap
          location={location}
          mode="vector"
          // behaviors={["drag"]}
        >
          <YMapDefaultSchemeLayer
            customization={[
              {
                tags: { any: ["road", "structure"] },
                stylers: { color: "#e2e2e2" },
              },
              {
                tags: { all: ["road"] },
                elements: "label.icon",
                stylers: { visibility: "off" },
              },
              {
                tags: { any: ["road", "address"] },
                elements: "label.text.outline",
                stylers: { visibility: "off" },
              },
              {
                tags: {
                  any: ["road", "address", "admin", "structure"],
                },
                elements: "label.text.fill",
                stylers: { color: "#6c6c6c" },
              },
              { tags: { all: ["water"] }, stylers: { color: "#b6bdc3" } },
              {
                tags: { any: ["land", "landcover"] },
                stylers: { color: "#ecedee" },
              },
              {
                tags: {
                  any: [
                    "poi",
                    "terrain",
                    "park",
                    "vegetation",
                    "region",
                    "locality",
                    "district",
                    "national_park",
                    "urban_area",
                  ],
                },
                stylers: { visibility: "off" },
              },
            ]}
          />
          <YMapDefaultFeaturesLayer />
          {addresses.map((item) => {
            if (!item.coordinates) return null;

            return (
              <YMapMarker
                key={item.id}
                coordinates={item.coordinates}
                hideOutsideViewport={false}
                draggable={false}
              >
                <div className={s.marker} onClick={() => onClick(item.id)}>
                  <MarkerIcon />
                  <span className={s.marker__city}>{item.city}</span>
                </div>
              </YMapMarker>
            );
          })}
          {/* <YMapControls position="top right">
            <YMapZoomControl />
          </YMapControls> */}
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
};

interface MapProps {
  currentContact: number | null;
  addresses: Address[];
  onClick: (id: number) => void;
}

export default Map;
