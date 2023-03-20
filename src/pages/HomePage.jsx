import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { getResources } from "../api/resourcesApi";
export default function HomePage() {
  async function get() {
    const { data } = await getResources();
    console.log(data.data.resources);
  }
  //   get();
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
